import NewsDto from "@/app/dto/newsAndBlogs/newsDto";
import {
  NewsRequestDto,
  NewsResponseDto,
} from "@/app/dto/newsAndBlogs/newsDto";
import { GetApiSource } from "@/app/helpers/defaultHelper";

const NewsListService = async (ln?: number | null): Promise<NewsDto[]> => {
  let newsList: NewsDto[] = [];
  try {
    let source = "/api/news/getNewsList";
    if (ln != null && ln > 0) {
      source = source.concat("?ln=", ln.toString());
    }
    const requestSource = GetApiSource(source);
    const response = await fetch(requestSource);
    const responseJson = await response.json();

    if (responseJson.status == true) {
      newsList = responseJson.data;
    }
  } catch (err) {
    console.log("err");
    console.log(err);
  }
  return newsList;
};
export default NewsListService;

export const AddNewService = async (
  request: NewsRequestDto
): Promise<NewsResponseDto> => {
  let addNewStatus: NewsResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = GetApiSource("/api/newsAndBlogs/addNews");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    addNewStatus = (await response.json()) as NewsResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addNewStatus;
};

export const NewsService = async (): Promise<NewsDto | null> => {
  let newsDetail: NewsDto | null = null;
  try {
    const requestSource = GetApiSource("/api/news/getNews");
    const response = await fetch(requestSource, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    if (responseJson.status == true) {
      newsDetail = responseJson.data as NewsDto;
    }
  } catch (err) {
    console.log(err);
  }
  return newsDetail;
};