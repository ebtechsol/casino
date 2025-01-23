
const getWindowLocation = () : string => {
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

const getApiSource = (source : string) : string => {
    return getWindowLocation().concat(source);
}
export { getApiSource, setDateFormat };