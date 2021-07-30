import React from 'react'
import types from '../../../utils/commonTypes'

export default function withDataGroup(Comp) {
    return class DataGrouperWrapper extends React.Component {
        static defaultProps = {
            data:[]
        }
        static propTypes = {
            data:types.groupDatas.isRequired
        }
        render() {
            const comps = this.props.data.map(item => <Comp key={item.value} info ={item} {...this.props}/>)
            return <>
                {comps}
            </>
        }
    }
}

