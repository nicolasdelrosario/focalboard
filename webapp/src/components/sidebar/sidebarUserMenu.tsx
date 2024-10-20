// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useState} from 'react'
import {useIntl} from 'react-intl'
import {useHistory} from 'react-router-dom'

import octoClient from '../../octoClient'
import {IUser} from '../../user'
import LetymindLogoIcon from '../../widgets/icons/leymind_logo'
import Menu from '../../widgets/menu'
import MenuWrapper from '../../widgets/menuWrapper'
import {getMe, setMe} from '../../store/users'
import {useAppSelector, useAppDispatch} from '../../store/hooks'

import ModalWrapper from '../modalWrapper'

import {IAppWindow} from '../../types'

import RegistrationLink from './registrationLink'

import './sidebarUserMenu.scss'

declare let window: IAppWindow

const SidebarUserMenu = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const [showRegistrationLinkDialog, setShowRegistrationLinkDialog] =
        useState(false)
    const user = useAppSelector<IUser | null>(getMe)
    const intl = useIntl()

    return (
        <div className='SidebarUserMenu'>
            <ModalWrapper>
                <MenuWrapper>
                    <div className='logo'>
                        <div className='logo-title'>
                            <LetymindLogoIcon/>
                        </div>
                    </div>
                    <Menu>
                        {user && user.username !== 'single-user' && (
                            <>
                                <Menu.Label>
                                    <b>{user.username}</b>
                                </Menu.Label>
                                <Menu.Text
                                    id='logout'
                                    name={intl.formatMessage({
                                        id: 'Sidebar.logout',
                                        defaultMessage: 'Log out',
                                    })}
                                    onClick={async () => {
                                        await octoClient.logout()
                                        dispatch(setMe(null))
                                        history.push('/login')
                                    }}
                                />
                                <Menu.Text
                                    id='changePassword'
                                    name={intl.formatMessage({
                                        id: 'Sidebar.changePassword',
                                        defaultMessage: 'Cambia la Contraseña',
                                    })}
                                    onClick={async () => {
                                        history.push('/change_password')
                                    }}
                                />
                                <Menu.Text
                                    id='invite'
                                    name={intl.formatMessage({
                                        id: 'Sidebar.invite-users',
                                        defaultMessage: 'Invita Usuarios',
                                    })}
                                    onClick={async () => {
                                        setShowRegistrationLinkDialog(true)
                                    }}
                                />

                                <Menu.Separator/>
                            </>
                        )}

                        <Menu.Text
                            id='about'
                            name={intl.formatMessage({
                                id: 'Sidebar.about',
                                defaultMessage: 'Sobre Letymind',
                            })}
                            onClick={async () => {
                                window.open(
                                    'https://letymind.com/',
                                    '_blank',
                                )

                                // TODO: Review if this is needed in the future, this is to fix the problem with linux webview links
                                if (window.openInNewBrowser) {
                                    window.openInNewBrowser(
                                        'https://letymind.com/',
                                    )
                                }
                            }}
                        />
                    </Menu>
                </MenuWrapper>

                {showRegistrationLinkDialog && (
                    <RegistrationLink
                        onClose={() => {
                            setShowRegistrationLinkDialog(false)
                        }}
                    />
                )}
            </ModalWrapper>
        </div>
    )
}

export default React.memo(SidebarUserMenu)
