"use client"
import React, { FC, ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  tooltip: string;
  section: string;
}

const ToolTip: FC<Props> = ({ children, tooltip, section }: Props): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      className='tooltip_container group relative'
    >
      {children}
      <span
        ref={tooltipRef}
        className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition rounded absolute mt-2 whitespace-nowrap transform translate-y-1/2 -translate-x-1/2 left-1/2 ${section === 'projects' ? "top-[-200%]" : "top-full"}`}
      >
        {tooltip}
      </span>
    </div>
  );
};

export default ToolTip;
