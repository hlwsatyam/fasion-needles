'use client';
import React from 'react';
import * as api from 'src/services';
import { useQuery } from 'react-query';
// toast
import toast from 'react-hot-toast';
// components
import Table from 'src/components/table/table';
import Newsletter from 'src/components/table/rows/newsletter';
import NewsletterCard from 'src/components/cards/newsletter';
// next
import { useSearchParams } from 'next/navigation';

const TABLE_HEAD = [
  { id: 'email', label: 'Email', alignRight: false, sort: true },
  { id: 'createdAt', label: 'Date', alignRight: false, sort: true },
  { id: 'action', label: 'Actions', alignRight: 'right' }
];

export default function EcommerceProductList() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const { data, isLoading } = useQuery(['newsletter', pageParam], () => api.getNewsletter(+pageParam || 1), {
    onError: (err) => {
      toast.error(`common:errors.${err.response.data.message}` || 'Something went wrong!');
    }
  });
  return (
    <>
      <Table
        rows={10}
        headData={TABLE_HEAD}
        data={data}
        isLoading={isLoading}
        row={Newsletter}
        mobileRow={NewsletterCard}
        onClickCopy={() => toast.success('Copy email')}
      />
    </>
  );
}
