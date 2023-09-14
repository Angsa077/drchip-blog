import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavItemCollapse = ({
    title,
    content,
    icon,
    name,
    activeNavMenu,
    setActiveNavMenu
}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (activeNavMenu !== name) {
            setIsChecked(false);
        }
    }, [activeNavMenu, name]);

    return (
        <div className="collapse collapse-arrow bg-base-200 min-h-0 rounded-none py-2">
            <input
                type="checkbox"
                className='min-h-0 py-0'
                checked={name === activeNavMenu}
                onChange={() => {
                    setActiveNavMenu(name);
                    setIsChecked(!isChecked)
                }}
            />
            <div className={`collapse-title font-medium min-h-0 py-0 pl-0 flex items-center gap-x-2 text-lg
            ${name === activeNavMenu
                    ? "font-bold text-primary"
                    : "font-semibold text-[#A5A5A5]"
                }`}
            >
                {icon}
                {title}
            </div>
            <div className="collapse-content">
                <div className='mt-2 flex flex-col gap-y-2'>
                    {
                        content.map((item) => (
                            <Link to={item.link}>{item.title}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NavItemCollapse
