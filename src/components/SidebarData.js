import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'profile',
        path: '/profile',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'async',
        path: '/async',
        icon: <RiIcons.RiCodeSSlashLine/>,
    },
    {
        title: 'sync flaw',
        path: '/sync',
        icon: <RiIcons.RiCodeSSlashLine color='#992255'/>,
    },
    {
        title: 'MongoDB',
        path: '/mongoDB',
        icon: <RiIcons.RiLeafFill/>,
    },
]