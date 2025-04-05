import React from 'react';
import { SORT_ASC_ICON, SORT_DESC_ICON } from '@/config/image-config';
import CustomImage from '@/components/custom-image/custom-image';

const SortButtons = () => {
    return (
        <div className="flex gap-3 cursor-pointer">
            <CustomImage src={SORT_ASC_ICON} alt="Edit" title="sort_asc" width={22} height={22} />
            <CustomImage src={SORT_DESC_ICON} alt="Edit" title="sort_desc" width={22} height={22} />
        </div>
    )
}

export default SortButtons;
