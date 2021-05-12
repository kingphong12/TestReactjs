import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const NavData = [
  {
    id: 1,
    title: 'Trang chủ',
    path: '/',
    // icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill/>,
    // iconOpened: <RiIcons.RiArrowUpSFill/>,
  },
  {
    id: 2,
    title: 'Báo cáo',
    path: '/baocao',
    // icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill/>,
    // iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Báo cáo Chính quyền',
        path: '/baocao/baocaochinhquyen',
        // icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Báo cáo Đảng',
        path: '/baocao/baocaodang',
        // icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    id: 3,
    title: 'Quản lý văn bản',
    path: '/quanlyvanban',
    // icon: <IoIcons.IoMdPeople/>
  },
  {
    id: 4,
    title: ' Quản lý công việc',
    path: '/quanlycongviec',
    // icon: <FaIcons.FaEnvelopeOpenText/>,

    // iconClosed: <RiIcons.RiArrowDownSFill/>,
    // iconOpened: <RiIcons.RiArrowUpFill/>,

    subNav: [
      {
        title: 'Hồ sơ công việc',
        path: '/quanlycongviec/hsconviec',
        // icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Theo dõi công việc',
        path: '/quanlycongviec/theodoicongviec',
        // icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    id: 5,
    title: 'Thông tin đơn vị',
    path: '/thongtindonvi',
    // icon: <IoIcons.IoMdHelpCircle/>,
    subNav: [
      {
        title: 'Danh sách nhân viên',
        path: '/thongtindonvi/dsnhanvien',
        // icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Tài liệu nội bộ',
        path: '/thongtindonvi/tailieunoibo',
        // icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
]
