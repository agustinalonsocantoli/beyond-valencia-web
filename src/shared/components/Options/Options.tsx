import lockers from '../../../../public/Options/lockers.jpg';
import bikes from '../../../../public/Options/bikes.jpg';
import Link from 'next/link';
import Image from 'next/image';

export const Options = () => {
    return (
        <div className="options">
            <div className='options_img-box'>
                <Image src={lockers} alt="img/lockers" />

                <Link href="/lockers" className='title_locker'>
                    <h1>LOCKERS &</h1>
                    <h1>CONSIGNAS</h1>
                </Link>
            </div>

            <div className='options_line'></div>

            <div className='options_img-box'>

                <Image src={bikes} alt="img/bikes" />

                <Link href="/bikes" className='title_bike'>
                    <h1>BIKE</h1>
                    <h1>RENTAL</h1>
                </Link>
            </div>
        </div>
    );
};