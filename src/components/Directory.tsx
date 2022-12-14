import type { NextPage } from 'next'
import React, { useEffect, useState } from "react";
import { fetchExchanges } from 'src/api/coinGecko.api';
import { Exchange } from 'src/types';
import ExchangeRow from './ExchangeRow';

const styles = {
  directoryCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  directoryCardWrapper: `flex items-center justify-between mx-auto max-w-screen-2xl`,
  directoryHead: `py-3 px-6`,
}

interface DirectoryProps {
  exchanges: Exchange[];
}
// pass in props from home page
const Directory = ({exchanges}: DirectoryProps) => {
  console.log("directory exchanges: ", exchanges)
  // // change to use API layer
  // const [ exchanges, setExchanges ] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await coingecko.get(`/exchanges/`, {
  //         params: {
  //           ids: "",
  //         },
  //       });
  //     const topTenExchangeData = response.data.slice(0,10)
  //     setExchanges(topTenExchangeData)
  //   };

  //   fetchData();
  // }, []);
  // const exchanges = async () => {
  //   const data = await fetchExchanges()
  //   const topTenData = data.slice(0,10);
  //   return {
  //        topTenData
  //     }
  //   }
  

  let counter = 0;
  return (

    <>
      <div className='w-full bg-white pt-400'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-40 pt-50 object-bottom'>
          <caption className="p-5 pt-100 text-lg font-semibold text-center invisible text-trasparent md:text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Central Exchanges <br/>
                <p className="mt-1 text-sm font-normal text-white md:text-white-500 dark:text-white-400">
                  {"Scope the list of the top 10 CEX's below and click the exchange name to read more."}
                </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className={styles.directoryHead}>#</th>
                <th scope="col" className={styles.directoryHead}>Exchange</th>
                <th scope="col" className={styles.directoryHead}>Trust Score</th>
                <th scope="col" className={styles.directoryHead}>Country</th>
                <th scope="col" className={styles.directoryHead}>URL</th>
              </tr>
            </thead>
            <tbody>
                  {exchanges.map((exchange) => {
                    counter += 1;
                    return <ExchangeRow key={exchange.id} exchange={exchange} id={exchange.id} counter={counter}/>
                          })}
            </tbody>
        </table>
      </div>
    </>
  )}

export default Directory
