import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <option key={r.id} value={r.id}>
      {r.title}
    </option>
  ))
  return <select  id="demoSelect" ng-model="binding.value"  style={{width:'100%',height:'26px'}}  ng-options="key for key in binding.landarr">{options}</select>
}
export default Suggestions