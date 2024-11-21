import Card from '@/components/Card';
import Sort from '@/components/Sort';
import { getFiles, getTotalSpaceUsed } from '@/lib/actions/file.actions';
import { convertFileSize, getFileTypesParams, getUsageSummary } from '@/lib/utils';
import { Models } from 'node-appwrite';
import Image from "next/image";
import React from 'react'
import { navItems } from '@/constants';

const page = async ({searchParams, params} : SearchParamProps) => {
    const type = (await params)?.type as string | "";
    const searchText = ((await searchParams)?.query) as string | "";
    const sort = ((await searchParams)?.sort) as string | "";
    
    const types = getFileTypesParams(type) as FileType[];

    const files = await getFiles({types, searchText, sort});

    // Parallel requests
    const totalSpace = await getTotalSpaceUsed();

    // Get usage summary
    const usageSummary = getUsageSummary(totalSpace);


  return (
    <div className=''>
      <section className='w-full'>
      {navItems.map(({url, name, icon}) => (
        name.toLowerCase() === type.toLowerCase() && ( 
          <div key={name} className='flex flex-1 gap-2 md:gap-3'>
            <Image src={icon} alt={type} width={24} height={24} className="page-icon" />
            <h1 className='text-[30px] leading-[36px] font-bold md:h1 capitalize'>{type}</h1>
          </div>
        )
      ))}

        <div className='total-size-section'>
            <p className='body-1'>
                Total Size : {" "}
                {usageSummary.map((summary) => (
                  summary.title.toLowerCase() === type.toLowerCase() && ( 
                  <span key={summary.title} className="h5">{convertFileSize(summary.size) || 0}</span> 
                )
                ))}
            </p>

            <div className='sort-container'>
                <p className='body-1 hidden sm:block text-light-200'>
                    Sort by :
                </p>
                <Sort />
            </div>
        </div>
      </section>

      {/* Render the files */}
      {files.total > 0 ? (
        <section className='file-list mt-10'>
            {files.documents.map((file: Models.Document) => (
                <Card key={file.$id} file={file} />
            ))}
        </section>
      ) : (
        <p className='empty-list'>No files uploaded !!</p>
      )}
    </div>
  )
}

export default page
