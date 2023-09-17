"use client"

// Calendar
import { Calendar } from 'primereact/calendar';

interface Props {
    title: string;
    subtitle: string;
    date: any;
    setDate: (action: any) => void;
}

export const Third = ({ title, subtitle, date, setDate }: Props) => {
    const dateNow: Date = new Date();

    return(
        <div className='contents_third'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div className='calendar'>
                <Calendar value={date} onChange={(e) => setDate(e.value)} inline />
            </div>
        </div>
    );
};