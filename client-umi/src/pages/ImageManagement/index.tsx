import React from 'react';
import { ImagePicker, WingBlank, NavBar, Icon } from 'antd-mobile';
import { Box } from '@/components';
import { ImagePickerPropTypes } from 'antd-mobile/lib/image-picker/PropsType';

const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  },
];

interface IImageManagementProps {}

type Param = Parameters<Required<ImagePickerPropTypes>['onChange']>;
type ImageFile = Param[0][0];

const ImageManagement: React.FC<IImageManagementProps> = (props) => {
  const [files, setFiles] = React.useState<ImageFile[]>(data);
  const [multiple, setMultiple] = React.useState(true);

  const onChange = (files: ImageFile[]) => {
    console.log(files);
    setFiles(files);
  };

  return (
    <>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        图片管理
      </NavBar>
      <Box>
        <WingBlank>
          <ImagePicker
            files={files}
            onChange={onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 7}
            multiple={multiple}
          />
        </WingBlank>
      </Box>
    </>
  );
};

export default ImageManagement;
