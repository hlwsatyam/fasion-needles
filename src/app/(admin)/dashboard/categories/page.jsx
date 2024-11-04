import React from 'react';
// Components
import CategoryList from 'src/components/_admin/categories/categoryList';
import Toolbar from 'src/components/_admin/toolbar';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
// Meta information
export const metadata = {
  title: 'Categories - fasion needles',
  applicationName: 'fasion needles',
  authors: 'fasion needles'
};
export default function Categories() {
  return (
    <>
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
              name: 'Categories'
            }
          ]}
          action={{
            href: `/dashboard/categories/add`,
            title: 'Add Category'
          }}
        />
      </Toolbar>
      <CategoryList />
    </>
  );
}
