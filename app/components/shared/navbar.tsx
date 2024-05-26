"use client";
import React, { useState } from "react";
import { HoveredLink, IconLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../utils/cn";




export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("inset-x-0 w-full mx-auto z-50 h-12 flex gap-2", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Modules">
                    <div className="  text-sm grid grid-cols-4 gap-4 p-4">
                        <IconLink href="/enterprise">
                            Module
                        </IconLink>
                        <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink> <IconLink href="/enterprise">
                            Module
                        </IconLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Test">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Personality Test"
                            href="/personality-test"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Test your personality based on briggs mayer"
                        />
                        <ProductItem
                            title="IQ Test"
                            href="#"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Coming Soon"
                        />
                        <ProductItem
                            title="Survival Test"
                            href="#"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Coming Soon"
                        />
                        <ProductItem
                            title="Emtional Test"
                            href="#"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Coming Soon"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#">Psychological Consultation</HoveredLink>
                        <HoveredLink href="#">HR Training</HoveredLink>
                    </div>
                </MenuItem>
                <div className="flex-grow">&nbsp;</div>
                <MenuItem setActive={setActive} active={active} item="Username" className="right-0" >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#">Profile</HoveredLink>
                        <HoveredLink href="#">Setting</HoveredLink>
                        <hr className="w-40" />
                        <HoveredLink href="#">Logout</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
