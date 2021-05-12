import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Tạo mới',
    path: '/taomoi',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Văn bản đi',
        path: '/taomoi/vanbandi',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Văn bản nội bộ',
        path: '/taomoi/vanbannoibo',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Reports 1',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <IoIcons.IoMdPeople/>
  },
  {
    title: 'Team',
    path: '/team',
    icon: <FaIcons.FaCartPlus/>
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText/>,

    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpFill/>,

    subNav: [
      {
        title: 'Messages',
        path: '/messages/messages 1',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Messages 2',
        path: '/messages/messages2',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle/>
  },
]
