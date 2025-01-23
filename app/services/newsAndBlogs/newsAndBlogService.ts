import NewsAndBlogDto, {
  NewsAndBlogCommentDto,
  AddNewsAndBlogRequestDto,
  AddNewsAndBlogResponseDto,
  AddNewsAndBlogCommentRequestDto,
  AddNewsAndBlogCommentResponseDto,
} from "@/app/dto/newsAndBlogs/newsAndBlog";
import { getApiSource } from "@/app/helpers/defaultHelper";
import { getAuthenticationAccessToken } from '@/lib/authenticationSession';

const GetListService = async (
  type: string,
  ln?: number | null
): Promise<NewsAndBlogDto[]> => {
  let blogList: NewsAndBlogDto[] = [];
  try {
    let source = "/api/newsAndBlog/getList";
    source = source.concat("?t=", type);
    if (ln != null && ln > 0) {
      source = source.concat("&ln=", ln.toString());
    }
    const requestSource = getApiSource(source);
    const response = await fetch(requestSource, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    if (responseJson.status == true) {
      blogList = responseJson.data as NewsAndBlogDto[];
    }
  } catch (err) {
    console.log(err);
  }
  return blogList;
};

const InsertRecordService = async (
  request: AddNewsAndBlogRequestDto
): Promise<AddNewsAndBlogResponseDto> => {
  let insertStatus: AddNewsAndBlogResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = getApiSource("/api/newsAndBlog/insertRecord");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    insertStatus = (await response.json()) as AddNewsAndBlogResponseDto;
  } catch (err) {
    console.log(err);
  }
  return insertStatus;
};

const GetRecordService = async (
  newsAndBlog_id: number
): Promise<NewsAndBlogDto | null> => {
  let blogDetail: NewsAndBlogDto | null = null;
  try {
    const requestSource = getApiSource(
      "/api/newsAndBlog/getRecord?id=".concat(newsAndBlog_id.toString())
    );
    const response = await fetch(requestSource, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    if (responseJson.status == true) {
      blogDetail = responseJson.data as NewsAndBlogDto;
    }
  } catch (err) {
    console.log(err);
  }
  return blogDetail;
};

const InsertCommentService = async (
  request: AddNewsAndBlogCommentRequestDto
): Promise<AddNewsAndBlogCommentResponseDto> => {
  let addCommentStatus: AddNewsAndBlogCommentResponseDto = {
    status: false,
    msg: "",
  };
  let accessToken : string | null = await getAuthenticationAccessToken();
  if(accessToken == null) { accessToken = "";}
  try {
    const requestSource = getApiSource("/api/newsAndBlog/insertComment");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authentication_access_token": accessToken
      },
      body: JSON.stringify(request),
    });
    addCommentStatus =
      (await response.json()) as AddNewsAndBlogCommentResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addCommentStatus;
};

const GetCommentListService = async (
  newsAndBlog_id: number
): Promise<NewsAndBlogCommentDto[]> => {
  let commentList: NewsAndBlogCommentDto[] = [];
  try {
    let source = "/api/newsAndBlog/getCommentList";
    if (newsAndBlog_id != null && newsAndBlog_id > 0) {
      source = source.concat("?id=", newsAndBlog_id.toString());
      const requestSource = getApiSource(source);
      const response = await fetch(requestSource, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      if (responseJson.status == true) {
        commentList = responseJson.data;
      }
    }
  } catch (err) {
    console.log(err);
  }
  return commentList;
};

export default GetListService;
export {InsertRecordService, GetRecordService, InsertCommentService, GetCommentListService};
