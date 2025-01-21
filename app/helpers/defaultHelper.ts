
const GetWindowLocation = () : string => {
    return (process.env.BASE_URL) ? process.env.BASE_URL.toString() : "";
}

const setDateFormat = (stringDateValue: string): string => {
    const dateValue: Date = new Date(stringDateValue);
    const padStart = (value: number): string => value.toString().padStart(2, '0');
    const monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];    
    const date = padStart(dateValue.getDate());
    const month = monthList[dateValue.getMonth()];
    const year = dateValue.getFullYear();
    return (date).concat(' ', month, ' ', year.toString());
}

const GetApiSource = (source : string) : string => {
    return GetWindowLocation().concat(source);
}
export { GetApiSource, setDateFormat };