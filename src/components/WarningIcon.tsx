import Image from 'next/image';
import { basePath } from '../../next.config';

const iconPath = `${basePath ?? ''}/assets/warning.svg`;

const WarningIcon = () => (
    <Image
        src={iconPath}
        alt=''
        role='presentation'
        aria-hidden='true'
        width={16}
        height={16}
    />
);

export default WarningIcon;