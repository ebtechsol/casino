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

export const AddNewsService = async (
  request: NewsRequestDto
): Promise<NewsResponseDto> => {
  let addNewsStatus: NewsResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = GetApiSource("/api/news/addNews");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    addNewsStatus = (await response.json()) as NewsResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addNewsStatus;
};

export const NewsService = async (news_id : number): Promise<NewsDto | null> => {
  let newsDetail: NewsDto | null = null;
  try {
    const requestSource = GetApiSource(("/api/news/getNewsDetail?news_id=").concat(news_id.toString()));
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