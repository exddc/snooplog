import * as React from 'react';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
    navMain: [
        {
            title: 'Getting Started',
            url: '#',
            items: [
                {
                    title: 'Installation',
                    url: '#',
                },
                {
                    title: 'Project Structure',
                    url: '#',
                },
            ],
        },
        {
            title: 'Building Your Application',
            url: '#',
            items: [
                {
                    title: 'Routing',
                    url: '#',
                },
                {
                    title: 'Data Fetching',
                    url: '#',
                    isActive: true,
                },
                {
                    title: 'Rendering',
                    url: '#',
                },
                {
                    title: 'Caching',
                    url: '#',
                },
                {
                    title: 'Styling',
                    url: '#',
                },
                {
                    title: 'Optimizing',
                    url: '#',
                },
                {
                    title: 'Configuring',
                    url: '#',
                },
                {
                    title: 'Testing',
                    url: '#',
                },
                {
                    title: 'Authentication',
                    url: '#',
                },
                {
                    title: 'Deploying',
                    url: '#',
                },
                {
                    title: 'Upgrading',
                    url: '#',
                },
                {
                    title: 'Examples',
                    url: '#',
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <h1 className="text-xl font-semibold pl-2 pt-2 font-mono">
                    SnoopLog
                </h1>
            </SidebarHeader>
            <SidebarContent>
                {/* We create a SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={item.isActive}
                                        >
                                            <a href={item.url}>{item.title}</a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
