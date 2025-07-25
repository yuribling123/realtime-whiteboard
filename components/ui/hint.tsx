import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
}

export const Hint = ({
    label,
    children,
    side,
    align,
    sideOffset,
    alignOffset,
}: HintProps) => {
    return(
        <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            {children}
          </TooltipTrigger>
          <TooltipContent
           className="bg-white/60 text-sm font-normal  text-black border border-zinc-300 rounded-xl shadow-lg px-3 py-2"

            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
          >
            <p className="font-semibold capitalize">
              {label}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
    )
};
