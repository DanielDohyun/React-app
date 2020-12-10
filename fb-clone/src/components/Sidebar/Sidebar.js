import { ExpandMoreOutlined } from '@material-ui/icons';
import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css';
import PeopleIcon from '@material-ui/icons/People'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0rE9Up76MQwge7VoFxfepZlMus6J4kUvzA&usqp=CAU" title="Dan Kim" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar;