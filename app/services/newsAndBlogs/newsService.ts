import NewsDto from '@/app/dto/newsAndBlogs/newsDto';
import {NewsRequestDto,NewsResponseDto} from '@/app/dto/newsAndBlogs/newsDto';
import { GetApiSource } from '@/app/helpers/defaultHelper';

const NewsListService = async () : Promise<NewsDto[]> => 
{
    let newsList : NewsDto[] = [];
    try {
        const requestSource =  GetApiSource("/api/news/getNewsList");
        const response = await fetch(requestSource)
        const responseJson = await response.json();

        if(responseJson.status == true){
            newsList = responseJson.data;
        }
    } catch (err) {
        console.log("err");
        console.log(err);
    }    
    return newsList;
}
export default NewsListService;

export const AddNew = async (
  request: NewsRequestDto
): Promise<NewsResponseDto> => {
  let addNewStatus: NewsResponseDto = {
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
    addNewStatus = (await response.json()) as NewsResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addNewStatus;
};

