import CasinoDto, {
  CasinoRequestDto,
  CasinoResponseDto,
} from "@/app/dto/casino/casinoDto";
import { getApiSource } from "@/app/helpers/defaultHelper";

const CasinoListService = async (ln?: number | null): Promise<CasinoDto[]> => {
  let casinoList: CasinoDto[] = [];
  try {
    let source = "/api/casino/getCasinoList";
    if (ln != null && ln > 0) {
      source = source.concat("?ln=", ln.toString());
    }
    const requestSource = getApiSource(source);
    const response = await fetch(requestSource);
    const responseJson = await response.json();

    if (responseJson.status == true) {
      casinoList = responseJson.data;
    }
  } catch (err) {
    console.log("err");
    console.log(err);
  }
  return casinoList;
};
export default CasinoListService;

export const AddCasinoService = async (
  request: CasinoRequestDto
): Promise<CasinoResponseDto> => {
  let addCasinoStatus: CasinoResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = getApiSource("/api/casino/addCasino");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    addCasinoStatus = (await response.json()) as CasinoResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addCasinoStatus;
};

export const CasinoService = async (
  casino_id: number
): Promise<CasinoDto | null> => {
  let casinoDetail: CasinoDto | null = null;
  try {
    const requestSource = getApiSource(
      "/api/casino/getCasinoDetail?casino_id=".concat(casino_id.toString())
    );
    const response = await fetch(requestSource, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    if (responseJson.status == true) {
      casinoDetail = responseJson.data as CasinoDto;
    }
  } catch (err) {
    console.log(err);
  }
  return casinoDetail;
};
