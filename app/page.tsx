import { AppSidebar } from '@/components/app-sidebar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { VolumeChart } from '@/components/volume-chart';

export default function Home() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center border-b px-4 justify-between">
                    <SidebarTrigger className="-ml-1" />
                    <Button>Refresh</Button>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <Card className="flex-1"></Card>
                    <VolumeChart />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
