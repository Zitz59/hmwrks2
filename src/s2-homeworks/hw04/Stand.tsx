import React, { useState } from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

// * 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const [checkedOne,setCheckedOne] = useState<boolean>(false)
    const [checkedTwo,setCheckedTwo] = useState<boolean>(false)


    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={(e) => setValue(e.currentTarget.value)}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={setValue}
                        error={error}
                        onEnter={() => {
                            setError(
                                stateForAllInputs.trim()
                                    ? ''
                                    : 'Error'
                            )
                            setValue('')
                        }}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                {/*обычная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-default'}>
                        default
                    </SuperButton>
                </div>
                {/*красная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                        red
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        disabled
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >
                        secondary
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                {/*чекбокс с текстом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={checkedOne}
                        onChangeChecked={setCheckedOne}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        checked={checkedTwo}
                        onChangeChecked={setCheckedTwo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
