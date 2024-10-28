'use client';
import React from 'react';
import Toolbar from 'src/components/_admin/toolbar';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import EditCategory from 'src/components/_admin/categories/editCategory';
import * as api from 'src/services';
// usequery
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

Page.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired
};
export default function Page({ params }) {
  const { data, isLoading } = useQuery(['coupon-codes'], () => api.getCategoryByAdmin(params.slug), {
    onError: (err) => {
      toast.error(err.response.data.message || 'Something went wrong!');
    }
  });
  return (
    <div>
      <Toolbar>
        <HeaderBreadcrumbs
          admin
          heading="Categories List"
          links={[
            {
              name: 'Dashboard',
              href: '/'
            },
            {
              name: 'Categories',
              href: '/dashboard/categories'
            },
            {
              name: data?.data?.name
            }
          ]}
        />
      </Toolbar>
      <EditCategory isLoading={isLoading} data={data?.data} />
    </div>
  );
}