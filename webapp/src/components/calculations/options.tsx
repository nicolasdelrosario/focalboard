// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react'

import Select, {components, DropdownIndicatorProps} from 'react-select'

import {CSSObject} from '@emotion/serialize'

import {useIntl, IntlShape} from 'react-intl'

import {getSelectBaseStyle} from '../../theme'
import ChevronUp from '../../widgets/icons/chevronUp'
import {IPropertyTemplate} from '../../blocks/board'

export type Option = {
    label: string
    value: string
    displayName: string
}

export const Options: Record<string, Option> = {
    none: {value: 'none', label: 'None', displayName: 'Calculate'},
    count: {value: 'count', label: 'Count', displayName: 'Count'},
    countEmpty: {value: 'countEmpty', label: 'Count Empty', displayName: 'Empty'},
    countNotEmpty: {value: 'countNotEmpty', label: 'Count Not Empty', displayName: 'Not Empty'},
    percentEmpty: {value: 'percentEmpty', label: 'Percent Empty', displayName: 'Empty'},
    percentNotEmpty: {value: 'percentNotEmpty', label: 'Percent Not Empty', displayName: 'Not Empty'},
    countValue: {value: 'countValue', label: 'Count Value', displayName: 'Values'},
    countChecked: {value: 'countChecked', label: 'Count Checked', displayName: 'Checked'},
    percentChecked: {value: 'percentChecked', label: 'Percent Checked', displayName: 'Checked'},
    percentUnchecked: {value: 'percentUnchecked', label: 'Percent Unchecked', displayName: 'Unchecked'},
    countUnchecked: {value: 'countUnchecked', label: 'Count Unchecked', displayName: 'Unchecked'},
    countUniqueValue: {value: 'countUniqueValue', label: 'Count Unique Values', displayName: 'Unique'},
    sum: {value: 'sum', label: 'Sum', displayName: 'Sum'},
    average: {value: 'average', label: 'Average', displayName: 'Average'},
    median: {value: 'median', label: 'Median', displayName: 'Median'},
    min: {value: 'min', label: 'Min', displayName: 'Min'},
    max: {value: 'max', label: 'Max', displayName: 'Max'},
    range: {value: 'range', label: 'Range', displayName: 'Range'},
    earliest: {value: 'earliest', label: 'Earliest Date', displayName: 'Earliest'},
    latest: {value: 'latest', label: 'Latest Date', displayName: 'Latest'},
    dateRange: {value: 'dateRange', label: 'Date Range', displayName: 'Range'},
}

export const optionLabelString = (option: Option, intl: IntlShape): string => {
    switch (option.value) {
    case 'none': return intl.formatMessage({id: 'Calculations.Options.none.label', defaultMessage: 'Ninguno'})
    case 'count': return intl.formatMessage({id: 'Calculations.Options.count.label', defaultMessage: 'Contador'})
    case 'countValue': return intl.formatMessage({id: 'Calculations.Options.countValue.label', defaultMessage: 'Valor del contador'})
    case 'countChecked': return intl.formatMessage({id: 'Calculations.Options.countChecked.label', defaultMessage: 'Contador revisado'})
    case 'percentChecked': return intl.formatMessage({id: 'Calculations.Options.percentChecked.label', defaultMessage: 'Porcentaje revisado'})
    case 'percentUnchecked': return intl.formatMessage({id: 'Calculations.Options.percentUnchecked.label', defaultMessage: 'Porcentaje no revisado'})
    case 'countUnchecked': return intl.formatMessage({id: 'Calculations.Options.countUnchecked.label', defaultMessage: 'Contador no revisado'})
    case 'countUniqueValue': return intl.formatMessage({id: 'Calculations.Options.countUniqueValue.label', defaultMessage: 'Contar valores unicos'})
    case 'sum': return intl.formatMessage({id: 'Calculations.Options.sum.label', defaultMessage: 'Suma'})
    case 'average': return intl.formatMessage({id: 'Calculations.Options.average.label', defaultMessage: 'Promedio'})
    case 'median': return intl.formatMessage({id: 'Calculations.Options.median.label', defaultMessage: 'Promedio'})
    case 'min': return intl.formatMessage({id: 'Calculations.Options.min.label', defaultMessage: 'Minimo'})
    case 'max': return intl.formatMessage({id: 'Calculations.Options.max.label', defaultMessage: 'Maximo'})
    case 'range': return intl.formatMessage({id: 'Calculations.Options.range.label', defaultMessage: 'Rango'})
    case 'earliest': return intl.formatMessage({id: 'Calculations.Options.earliest.label', defaultMessage: 'El primero'})
    case 'latest': return intl.formatMessage({id: 'Calculations.Options.latest.label', defaultMessage: 'El Último'})
    case 'dateRange': return intl.formatMessage({id: 'Calculations.Options.dateRange.label', defaultMessage: 'Rango'})
    default: return option.label
    }
}

export const optionDisplayNameString = (option: Option, intl: IntlShape): string => {
    switch (option.value) {
    case 'none': return intl.formatMessage({id: 'Calculations.Options.none.displayName', defaultMessage: 'Calcular'})
    case 'count': return intl.formatMessage({id: 'Calculations.Options.count.displayName', defaultMessage: 'Contar'})
    case 'countValue': return intl.formatMessage({id: 'Calculations.Options.countValue.displayName', defaultMessage: 'Valores'})
    case 'countChecked': return intl.formatMessage({id: 'Calculations.Options.countChecked.displayName', defaultMessage: 'Revisado'})
    case 'percentChecked': return intl.formatMessage({id: 'Calculations.Options.percentChecked.displayName', defaultMessage: 'Revisado'})
    case 'percentUnchecked': return intl.formatMessage({id: 'Calculations.Options.percentUnchecked.displayName', defaultMessage: 'No revisado'})
    case 'countUnchecked': return intl.formatMessage({id: 'Calculations.Options.countUnchecked.displayName', defaultMessage: 'No revisado'})
    case 'countUniqueValue': return intl.formatMessage({id: 'Calculations.Options.countUniqueValue.displayName', defaultMessage: 'Único'})
    case 'sum': return intl.formatMessage({id: 'Calculations.Options.sum.displayName', defaultMessage: 'Suma'})
    case 'average': return intl.formatMessage({id: 'Calculations.Options.average.displayName', defaultMessage: 'Promedio'})
    case 'median': return intl.formatMessage({id: 'Calculations.Options.median.displayName', defaultMessage: 'Promedio'})
    case 'min': return intl.formatMessage({id: 'Calculations.Options.min.displayName', defaultMessage: 'Minimo'})
    case 'max': return intl.formatMessage({id: 'Calculations.Options.max.displayName', defaultMessage: 'Maximo'})
    case 'range': return intl.formatMessage({id: 'Calculations.Options.range.displayName', defaultMessage: 'Rango'})
    case 'earliest': return intl.formatMessage({id: 'Calculations.Options.earliest.displayName', defaultMessage: 'El primero'})
    case 'latest': return intl.formatMessage({id: 'Calculations.Options.latest.displayName', defaultMessage: 'El último'})
    case 'dateRange': return intl.formatMessage({id: 'Calculations.Options.dateRange.displayName', defaultMessage: 'Rango'})
    default: return option.displayName
    }
}

export const optionsByType: Map<string, Option[]> = new Map([
    ['common', [Options.none, Options.count, Options.countEmpty, Options.countNotEmpty, Options.percentEmpty,
        Options.percentNotEmpty, Options.countValue, Options.countUniqueValue]],
    ['checkbox', [Options.countChecked, Options.countUnchecked, Options.percentChecked, Options.percentUnchecked]],
    ['number', [Options.sum, Options.average, Options.median, Options.min, Options.max, Options.range]],
    ['date', [Options.earliest, Options.latest, Options.dateRange]],
    ['createdTime', [Options.earliest, Options.latest, Options.dateRange]],
    ['updatedTime', [Options.earliest, Options.latest, Options.dateRange]],
])

export const typesByOptions: Map<string, string[]> = generateTypesByOption()

function generateTypesByOption(): Map<string, string[]> {
    const mapping = new Map<string, string[]>()

    optionsByType.forEach((options, type) => {
        options.forEach((option) => {
            const types = mapping.get(option.value) || []
            types.push(type)
            mapping.set(option.value, types)
        })
    })

    return mapping
}

const baseStyles = getSelectBaseStyle()

const styles = {
    ...baseStyles,
    dropdownIndicator: (provided: CSSObject): CSSObject => ({
        ...baseStyles.dropdownIndicator(provided),
        pointerEvents: 'none',
    }),
    control: (): CSSObject => ({
        border: 0,
        width: '100%',
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
    }),
    menu: (provided: CSSObject): CSSObject => ({
        ...provided,
        minWidth: '100%',
        width: 'max-content',
        background: 'rgb(var(--center-channel-bg-rgb))',
        left: '0',
        marginBottom: '0',
    }),
    singleValue: (provided: CSSObject): CSSObject => ({
        ...baseStyles.singleValue(provided),
        opacity: '0.8',
        fontSize: '12px',
        right: '0',
        textTransform: 'uppercase',
    }),
    valueContainer: (provided: CSSObject): CSSObject => ({
        ...baseStyles.valueContainer(provided),
        display: 'none',
        pointerEvents: 'none',
    }),
}

const DropdownIndicator = (props: DropdownIndicatorProps<Option, false>) => {
    return (
        <components.DropdownIndicator {...props}>
            <ChevronUp/>
        </components.DropdownIndicator>
    )
}

// Calculation option props shared by all implementations of calculation options
export type CommonCalculationOptionProps = {
    value: string
    menuOpen: boolean
    onClose?: () => void
    components?: {[key: string]: (props: any) => JSX.Element}
    onChange: (data: any) => void
    property?: IPropertyTemplate
}

// Props used by the base calculation option component
type BaseCalculationOptionProps = CommonCalculationOptionProps & {
    options: Option[]
}

export const CalculationOptions = (props: BaseCalculationOptionProps): JSX.Element => {
    const intl = useIntl()

    return (
        <Select
            styles={styles}
            value={Options[props.value]}
            isMulti={false}
            isClearable={true}
            name={'calculation_options'}
            className={'CalculationOptions'}
            classNamePrefix={'CalculationOptions'}
            options={props.options}
            menuPlacement={'auto'}
            isSearchable={false}
            components={{DropdownIndicator, ...(props.components || {})}}
            defaultMenuIsOpen={props.menuOpen}
            autoFocus={false}
            formatOptionLabel={(option: Option, meta) => {
                return meta.context === 'menu' ? optionLabelString(option, intl) : optionDisplayNameString(option, intl)
            }}
            onMenuClose={() => {
                if (props.onClose) {
                    props.onClose()
                }
            }}
            onChange={(item) => {
                if (item?.value) {
                    props.onChange(item.value)
                }
            }}
        />
    )
}
