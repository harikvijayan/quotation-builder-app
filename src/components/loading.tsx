/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from 'antd'

export function Loading({
    style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
}: any) {
    return (
        <div style={style}>
            <Spin size="large" />
        </div>
    )
}
