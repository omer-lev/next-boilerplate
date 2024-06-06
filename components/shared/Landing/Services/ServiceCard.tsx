import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  shortDescription: string;
  longDescription: string;
}

const ServiceCard = ({ title, shortDescription, longDescription }: CardProps) => {
  return (
    <div className='w-4/5 min-h-44 flex flex-col px-7 py-5 bg-muted-foreground rounded-md mx-auto shadow-md relative'>
      <div className="flex-1">
        <h2 className='font-semibold text-lg text-muted'>
          {title}
        </h2>

        <p className="text-primary">
          {shortDescription}
        </p>
      </div>

      <Dialog>
        <DialogTrigger className="underline underline-offset-4 pt-2 flex text-primary">
          Learn More
          <ArrowUpRight className="ml-2" />
        </DialogTrigger>

        <DialogContent className="fixed w-4/5 lg:min-w-[60%] rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {title}
            </DialogTitle>
            <DialogDescription>
              {longDescription}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default ServiceCard