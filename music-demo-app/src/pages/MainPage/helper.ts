import services from "../../services";

export const getMusic = async (filter: any) => {
  delete filter.page;

  const custom_path = "?" + new URLSearchParams(filter).toString();

  try {
    const data = await services.post(`search${custom_path}`, {}) as {request:any, data:any};
    
    if(data?.data?.request?.status === 200){
        return { data: data?.data?.data, success: true };
    }else{
        return {data : null, success: false}
    }
    
  } catch (err) {
    return { error: err || "Something Went Wrong" };
  }
};

let timeId:any = 0
export const debounceCell = (debFunction: any, value: string, time: number) => {
    if(timeId){
        clearTimeout(timeId)
    }
    return new Promise(async (response, rejected) => {
     timeId = setTimeout(async () => {
      const res = await debFunction(value);
      response(res);
    }, time);
  });
};
