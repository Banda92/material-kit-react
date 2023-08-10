import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Tooltip from '@mui/material/Tooltip'; // Tooltip 추가
// import { useState } from 'react';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckBoxes(props) {

    // const [selectedOptions, setSelectedOptions] = useState([]); // 선택된 옵션리스트 저장

    const data = props.data
// const data = ['간호간병','권역외상센터','권역응급의료센터','분만실','신생아','완화병동']


    const handleFilter = (value,getTagProps)=>{
      getTagProps?
      props.setFilterHandler(getTagProps) : props.setFilterHandler(props.data)
      // props.applyFilter()
      
    }
  
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={data}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      defaultValue={data} // 여기에 defaultValue 추가
      onChange={handleFilter} // 값이 변했을때 호출
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8}}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 'auto', backgroundColor:'white', borderRadius:'5px', marginTop:'8px' }}
      renderTags={(value, getTagProps) => {
        const MAX_DISPLAY_COUNT = 3; // 최대 표시 개수 설정
        if (value.length > MAX_DISPLAY_COUNT) {
          // 최대 개수를 초과하는 경우, ...으로 표시하고 Tooltip으로 전체 내용을 보여줌
          return (
            <>
              {value.slice(0, MAX_DISPLAY_COUNT).map((option, index) => (
                <Tooltip key={option} title={option}>
                  <li {...getTagProps({ index })} style={{ whiteSpace: 'nowrap' }}>
                    {option.length > 20 ? `${option.slice(0, 20)}...` : option}
                  </li>
                </Tooltip>
              ))}
              <li>{`... +${value.length - MAX_DISPLAY_COUNT}`}</li>
            </>
          );
        }
        // 최대 개수 이하인 경우, 모든 옵션 표시
        return value.map((option, index) => (
          <Tooltip key={option} title={option}>
            <li {...getTagProps({ index })} style={{ whiteSpace: 'nowrap' }}>
              {option.length > 20 ? `${option.slice(0, 20)}...` : option}
            </li>
          </Tooltip>
        ));
      }}
      renderInput={(params) => (
        <TextField {...params} label={props.label} placeholder="Select" />
      )}
    />
  );
}


