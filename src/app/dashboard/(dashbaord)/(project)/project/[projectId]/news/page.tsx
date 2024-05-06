import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';
import { NewsTagList } from './_components/news-tag-list';
import { getAllNews, getAllNewsTags } from './actions';

export default async function Page({
  searchParams: { page, pageSize, isDeleted, tagIds },
}: {
  searchParams: {
    page: string;
    pageSize: string;
    isDeleted: string;
    tagIds: string;
  };
}) {
  const { data: news, pageCount } = await getAllNews({ page, pageSize, isDeleted, tagIds });
  const { data: newsTags } = await getAllNewsTags();

  return (
    <>
      <h2 className='text-lg font-semibold'>最新消息</h2>
      <NewsTagList tags={newsTags} />
      <DataTable
        columns={columns}
        data={news}
        pageCount={pageCount}
      />
    </>
  );
}
