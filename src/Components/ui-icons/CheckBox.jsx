import { useState } from "react";
function CheckBox() {
  const [checked, setChecked] = useState(true);
  return (
    <div
      className={`checkbox ${checked && "checkbox-border"}`}
      onClick={() => setChecked(!checked)}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 14"
          fill="none"
          width="14"
          height="14"
        >
          <rect x="0.400391" width="14" height="14" rx="4.2" fill="#0071E3" />
          <path
            d="M6.66451 10.3277C6.9696 10.3277 7.20025 10.2106 7.35646 9.97627L10.7356 4.8837C10.7918 4.80071 10.8333 4.71895 10.8601 4.6384C10.887 4.55542 10.9004 4.47609 10.9004 4.40043C10.9004 4.19053 10.8272 4.01724 10.6807 3.88056C10.5367 3.74144 10.3585 3.67188 10.1462 3.67188C9.99976 3.67188 9.87529 3.70116 9.77278 3.75974C9.67271 3.81588 9.57752 3.91351 9.48721 4.05263L6.64987 8.50817L5.22937 6.80577C5.0756 6.62759 4.88278 6.53851 4.65091 6.53851C4.43369 6.53851 4.2543 6.60807 4.11273 6.74719C3.97117 6.88631 3.90039 7.06082 3.90039 7.27072C3.90039 7.36591 3.91503 7.45622 3.94432 7.54165C3.97605 7.62463 4.03341 7.71128 4.11639 7.80158L6.00185 10.0239C6.17515 10.2264 6.39603 10.3277 6.66451 10.3277Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
}
export default CheckBox;
