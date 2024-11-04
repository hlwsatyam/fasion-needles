import React from 'react';
import Toolbar from 'src/components/_admin/toolbar';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import AddCategory from 'src/components/_admin/categories/addCategory';

// Meta information
export const metadata = {
  title: 'Add Categories - fasion needles',
  applicationName: 'fasion needles',
  authors: 'fasion needles'
};

export default function page() {
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
              name: 'Add Category'
            }
          ]}
        />
      </Toolbar>
      <AddCategory />
    </div>
  );
}
