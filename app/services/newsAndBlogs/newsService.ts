import NewsDto from '@/app/dto/newsAndBlogs/newsDto';
import {NewsRequestDto,NewsResponseDto} from '@/app/dto/newsAndBlogs/newsDto';
import { GetApiSource } from '@/app/helpers/defaultHelper';

const NewsService = async () : Promise<NewsDto[]> => 
{
    let newsContent : NewsDto[] = [];
    try {
        const requestSource =  GetApiSource("/api/newsAndBlogs/getNewsContent");
        const response = await fetch(requestSource)
        const responseJson = await response.json();

        if(responseJson.status == true){
            newsContent = responseJson.data;
        }
    } catch (err) {
        console.log("err");
        console.log(err);
    }    
    return newsContent;
}

export const AddNew = async (
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

export default NewsService;