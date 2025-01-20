import NewsDto from '@/app/dto/newsAndBlogs/newsDto';
import {NewRequestDto,NewResponseDto} from '@/app/dto/newsAndBlogs/newsDto';
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
  request: NewRequestDto
): Promise<NewResponseDto> => {
  let addNewStatus: NewResponseDto = {
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
    addNewStatus = (await response.json()) as NewResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addNewStatus;
};

export default NewsService;