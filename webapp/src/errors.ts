// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {useIntl} from 'react-intl'

import {UserSettings} from './userSettings'

enum ErrorId {
    TeamUndefined = 'team-undefined',
    NotLoggedIn = 'not-logged-in',
    InvalidReadOnlyBoard = 'invalid-read-only-board',
    BoardNotFound = 'board-not-found',
}

type ErrorDef = {
    title: string

    button1Enabled: boolean
    button1Text: string
    button1Redirect: string | ((params: URLSearchParams) => string)
    button1Fill: boolean
    button1ClearHistory: boolean

    button2Enabled: boolean
    button2Text: string
    button2Redirect: string | ((params: URLSearchParams) => string)
    button2Fill: boolean
    button2ClearHistory: boolean
}

function errorDefFromId(id: ErrorId | null): ErrorDef {
    const errDef: ErrorDef = {
        title: '',
        button1Enabled: false,
        button1Text: '',
        button1Redirect: '',
        button1Fill: false,
        button1ClearHistory: false,
        button2Enabled: false,
        button2Text: '',
        button2Redirect: '',
        button2Fill: false,
        button2ClearHistory: false,
    }

    const intl = useIntl()

    switch (id) {
    case ErrorId.TeamUndefined: {
        errDef.title = intl.formatMessage({id: 'error.team-undefined', defaultMessage: 'No un equipo valido.'})
        errDef.button1Enabled = true
        errDef.button1Text = intl.formatMessage({id: 'error.back-to-home', defaultMessage: 'Volver a Home'})
        errDef.button1Redirect = (): string => {
            UserSettings.setLastTeamID(null)
            return window.location.origin
        }
        errDef.button1Fill = true
        break
    }
    case ErrorId.BoardNotFound: {
        errDef.title = intl.formatMessage({id: 'error.board-not-found', defaultMessage: 'Board no encontrado.'})
        errDef.button1Enabled = true
        errDef.button1Text = intl.formatMessage({id: 'error.back-to-team', defaultMessage: 'Volver al equipo'})
        errDef.button1Redirect = '/'
        errDef.button1Fill = true
        break
    }
    case ErrorId.NotLoggedIn: {
        errDef.title = intl.formatMessage({id: 'error.not-logged-in', defaultMessage: 'Sesión expirada.'})
        errDef.button1Enabled = true
        errDef.button1Text = intl.formatMessage({id: 'error.go-login', defaultMessage: 'Iniciar sesión'})
        errDef.button1Redirect = '/login'
        errDef.button1Redirect = (params: URLSearchParams): string => {
            const r = params.get('r')
            if (r) {
                return `/login?r=${r}`
            }
            return '/login'
        }
        errDef.button1Fill = true
        break
    }
    case ErrorId.InvalidReadOnlyBoard: {
        errDef.title = intl.formatMessage({id: 'error.invalid-read-only-board', defaultMessage: 'No tienes permiso para ver este tablero.'})
        errDef.button1Enabled = true
        errDef.button1Text = intl.formatMessage({id: 'error.go-login', defaultMessage: 'Iniciar sesión'})
        errDef.button1Redirect = (): string => {
            return window.location.origin
        }
        errDef.button1Fill = true
        break
    }
    default: {
        errDef.title = intl.formatMessage({id: 'error.unknown', defaultMessage: 'Un error ocurrió.'})
        errDef.button1Enabled = true
        errDef.button1Text = intl.formatMessage({id: 'error.back-to-home', defaultMessage: 'Vuelve a Home'})
        errDef.button1Redirect = '/'
        errDef.button1Fill = true
        errDef.button1ClearHistory = true
        break
    }
    }
    return errDef
}

export {ErrorId, ErrorDef, errorDefFromId}
