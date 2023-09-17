interface Props {
    time: string | null;
    setTime: (action: string) => void;
    hour: string;
}

export const SelectTime = (props: Props) => {
    const { time, setTime, hour } = props;

    return(
        <span
            className={(time === hour) ? 'active' : 'disable'} 
            onClick={() => {
                setTime(hour);
            }}
        >
            {hour}
        </span>
    )
};