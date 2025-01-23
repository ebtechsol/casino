import {NewsLetterRequestDto,NewsLetterResponseDto} from '@/app/dto/newsLetter/newsletter';
import { getApiSource } from '@/app/helpers/defaultHelper';



export const AddSubscriber = async (
    request: NewsLetterRequestDto
  ): Promise<NewsLetterResponseDto> => {
    let commentStatus: NewsLetterResponseDto = {
      status: false,
      msg: "",
    };
    try {
      const requestSource = getApiSource("/api/newsletter");
      const response = await fetch(requestSource, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      commentStatus = (await response.json()) as NewsLetterResponseDto;
    } catch (err) {
      console.log(err);
    }
    return commentStatus;
  };
  