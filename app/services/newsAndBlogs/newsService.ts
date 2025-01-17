import NewsDto from '@/app/dto/newsAndBlogs/newsDto';
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

export default NewsService;