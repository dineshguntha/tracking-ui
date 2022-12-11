import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import axios from 'axios';

const ratingChanged = (newRating) => {
    console.log(newRating)
}

export default function Track() {
   const {id} = useParams();
   const [value, setValue] = useState(new Map());
   
   useEffect(() => {
    axios.get('http://localhost:8080/tracking/'+id).then(res =>  {
        console.log('Inside the axios get .... ',res.data);
        let map = new Map();
        if (res?.data !== undefined && res?.data?.rating) {
            for (let i = 1; i <= 5; i++ ) {
                if (i <= res.data.rating) {
                    map.set(i, true);
                } else {
                    map.set(i, false);
                }
            }
            setValue(map);
        }
    })
   }, [id]);
   if (value.size === 0)
   return null;
   
    return (
        <div className='flex flex-row justify-center mt-5'>
            <div className='flex w-3/5 justify-center bg-sky-600 rounded-xl p-3'>
                <div className='border-2 border-white rounded-xl w-full'>
                    <div className='flex flex-row justify-between items-center pl-5 pt-5'>
                        <div className='pr-5 w-2/5 pb-5'>
                            <h1 className='text-white text-4xl font-medium'>PIZZA TRACKER</h1>
                        </div>
                        <div className='pr-5 text-gray-100 w-3/5 pb-5'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className='bg-sky-500/75 rounded-md m-5 p-5'>
                        <div className='flex flex-row items-center pb-3'>
                            <div className='basis-2/12 pr-5'>
                                <p className='text-sm pb-2 border-b-8 border-lime-400 text-white'>ORDER PLACED</p>
                            </div>
                            <div className='basis-2/12 pr-5'>
                                <p className='text-sm pb-2 border-b-8 border-lime-400 text-white'>PREP</p>
                            </div>
                            <div className='basis-3/12 pr-5'>
                                <p className='text-sm pb-2 border-b-8 border-lime-400 text-white'>BAKE</p>
                            </div>
                            <div className='basis-1/12 pr-5'>
                                <p className='text-sm pb-2 border-b-8 border-lime-400 text-white'>BOX</p>
                            </div>
                            <div className='basis-4/12 pr-5'>
                                <p className='text-sm pb-2 border-b-8 border-lime-400 text-white'>DELIVERY</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <div className={'basis-2/12 '+ (value.get(1) ? 'one-parallelogram-active': 'one-parallelogram')}>
                                <div className='text-4xl parallelogram-text'>1</div>
                            </div>
                            <div className={'basis-2/12 '+ (value.get(2) ? 'two-parallelogram-active': 'two-parallelogram')}>
                                <div className='text-4xl parallelogram-text'>2</div>
                            </div>
                            <div className={'basis-3/12 '+ (value.get(3) ? 'three-parallelogram-active': 'three-parallelogram')}>
                                <div className='text-4xl parallelogram-text'>3</div>
                            </div>
                            <div className={'basis-1/12 ' + (value.get(4) ? 'four-parallelogram-active': 'four-parallelogram')}>
                                <div className='text-4xl parallelogram-text'>4</div>
                            </div>
                            <div className={'basis-4/12 ' + (value.get(5)? 'five-parallelogram-active': 'five-parallelogram')}>
                                <div className='text-4xl parallelogram-text'>5</div>
                            </div>
                        </div>
                        {/* <div className='flex flex-row items-center border border-white rounded-full shadow-2xl	shadow-inner'>
                            <div className='one-parallelogram'>
                                <div className='text-4xl one-inner-parallelogram p-5'>1</div>
                            </div>
                            <div className='two-parallelogram'>
                                <div className='text-4xl two-inner-parallelogram p-5'>2</div>
                            </div>
                            <div className='three-parallelogram'>
                                <div className='text-4xl three-inner-parallelogram p-5'>3</div>
                            </div>
                            <div className='four-parallelogram'>
                                <div className="text-4xl four-inner-parallelogram p-5">4</div>
                            </div>
                            <div className='five-parallelogram'>
                                <div className='text-4xl five-inner-parallelogram p-5'>5</div>
                                <span className='right-parallelogram'></span>
                            </div>
                        </div> */}
                        <h3 className='font-medium text-xl text-gray-100 mt-3'>YOU GOT ORDER ASSEMBLY - <span className='text-base	font-normal'>
                            YOUR ORDER WAS BOXED FOR DELIVERY AT 12:37PM</span></h3>
                    </div>
                    <div className='mt-4 pl-5'>
                        <div className='flex flex-row items-start pb-5'>
                            <div className='basis-4/12 pr-5'>
                                <div className='bg-sky-500/75 rounded-md flex flex-col py-2 px-5 h-52'>
                                    <h3 className='font-medium border-b text-lg	text-white pb-1 mb-2 text-left'>YOUR LOCAL STORE</h3>
                                    <p className='font-medium text-gray-100 text-lg pb-3 text-left'>Contact your Domino's with any questions: </p>
                                    <p className='text-gray-100 text-base text-left pb-1'>2282 South Main Street, Ann Arbor, MI 48103, 734-332-1111</p>
                                </div>
                            </div>
                            <div className='basis-4/12 pr-5'>
                                <div className='bg-sky-500/75 rounded-md flex flex-col py-2 px-5 h-52'>
                                    <h3 className='font-medium border-b text-lg	text-white pb-1 mb-2 text-left'>YOUR ORDER DETAILS:</h3>
                                    <p className='font-medium text-gray-100 text-base pb-3 text-left'>(1) Small (10") Hand Tossed Pizza</p>
                                    <p className='font-medium text-gray-100 text-base pb-3 text-left'>(1) Chicken Kickers</p>
                                    <p className='font-medium text-gray-100 text-base pb-3 text-left'>(1) 2-Litre Coke</p>
                                </div>
                            </div>
                            <div className='basis-4/12 pr-5'>
                                <div className='bg-sky-500/75 rounded-md flex flex-col py-2 px-5 h-52'>
                                    <h3 className='font-medium border-b text-lg	text-white pb-1 mb-2 text-left'>RATE YOUR DOMINO's</h3>
                                    <p className='font-medium text-gray-100 text-lg text-left'>When your pizza arrives tell us how it was.</p>
                                    <p className='text-gray-100 text-base text-left pb-1'>Rate your service from  
                                        <span className='text-xl font-medium'> 1-5</span>
                                    </p>
                                    <ReactStars
                                        count={5} onChange={ratingChanged} size={24} color2={'#ffffff'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
