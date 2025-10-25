"use client";
import { FileText, Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Quote {
  id: string;
  customerName: string;
  description: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
  date: string;
}

interface Invoice {
  id: string;
  customerName: string;
  description: string;
  amount: number;
  status: "paid" | "unpaid" | "overdue";
  dueDate: string;
}

const mockQuotes: Quote[] = [
  {
    id: "QT-001",
    customerName: "Emma Thompson",
    description: "5-Day Beach Resort Package",
    amount: 2500,
    status: "approved",
    date: "2025-10-10",
  },
  {
    id: "QT-002",
    customerName: "David Kim",
    description: "Weekend Spa Retreat",
    amount: 1500,
    status: "pending",
    date: "2025-10-12",
  },
  {
    id: "QT-003",
    customerName: "Rachel Martinez",
    description: "Mountain Lodge Stay",
    amount: 2200,
    status: "rejected",
    date: "2025-10-08",
  },
];

const mockInvoices: Invoice[] = [
  {
    id: "INV-001",
    customerName: "Michael Chen",
    description: "Mountain Retreat - October 2025",
    amount: 1800,
    status: "paid",
    dueDate: "2025-10-18",
  },
  {
    id: "INV-002",
    customerName: "James Rodriguez",
    description: "Spa & Wellness Resort",
    amount: 3200,
    status: "unpaid",
    dueDate: "2025-10-25",
  },
  {
    id: "INV-003",
    customerName: "Thomas Brown",
    description: "City Hotel Stay",
    amount: 850,
    status: "overdue",
    dueDate: "2025-10-05",
  },
];

export default function QuotesInvoicesPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">Quotes & Invoices</h1>
          <p className="text-muted-foreground">
            Manage quotes and invoices for your customers
          </p>
        </div>
      </div>

      {/*Tabs to switch between quotes and invoices */}
      <Tabs defaultValue="quotes" className="w-full">
        <TabsList>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>
        <TabsContent value="quotes" className="mt-6">
          {/*Create the button to create a quote */}
          <div className="mb-4 flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Quote
            </Button>
          </div>

          {/*Wrap the table in a border */}
          <div className="rounded-lg border">
            {/*Create table*/}
            <Table>
              {/*Create the header container */}
              <TableHeader>
                {/* Create the table row*/}
                <TableRow>
                  {/*Create the headers */}
                  <TableHead>Quote ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              {/*Create the table body that will contain the contents */}
              <TableBody>
                {/* Map through the mockQuotes. 
                    As it maps through mockQuotes, it will be stored into quotes.
                    Use <TableCell> to display the contents
                    Use quote.prop to show what to display
                */}
                {mockQuotes.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell>{quote.id}</TableCell>
                    <TableCell>{quote.customerName}</TableCell>
                    <TableCell>{quote.description}</TableCell>
                    <TableCell>${quote.amount.toLocaleString()}</TableCell>
                    <TableCell>{quote.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          quote.status === "approved"
                            ? "default"
                            : quote.status === "pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {quote.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="mt-6">
          <div className="mb-4 flex justify-end">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Invoice
            </Button>
          </div>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>{invoice.id}</TableCell>
                    <TableCell>{invoice.customerName}</TableCell>
                    <TableCell>{invoice.description}</TableCell>
                    <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          invoice.status === "paid"
                            ? "default"
                            : invoice.status === "unpaid"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
