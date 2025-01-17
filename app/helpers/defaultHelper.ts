
const GetWindowLocation = () : string => {
    return (process.env.BASE_URL) ? process.env.BASE_URL.toString() : "";
}

const GetApiSource = (source : string) : string => {
    return GetWindowLocation().concat(source);
}
export { GetApiSource };