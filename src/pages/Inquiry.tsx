import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// ✅ Validation Schema
const inquirySchema = z.object({
  clientName: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().min(10, "Enter a valid mobile number"),
  email: z.string().email("Enter a valid email address"),
  constructionType: z.string().min(1, "Please select a construction type"),
  plotSize: z.string().min(1, "Please enter plot size"),
  budget: z.string().min(1, "Please enter estimated budget"),
  location: z.string().min(2, "Please enter project location"),
  requirements: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const constructionTypes = [
  "House",
  "Building",
  "Shop",
  "Office",
  "Warehouse",
  "Other",
];

const Inquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      clientName: "",
      mobile: "",
      email: "",
      constructionType: "",
      plotSize: "",
      budget: "",
      location: "",
      requirements: "",
    },
  });

  // ✅ UPDATED SUBMIT FUNCTION
  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/api/inquiry", {
        name: data.clientName,
        phone: data.mobile,
        email: data.email,
        type: data.constructionType,
        area: data.plotSize,
        budget: data.budget,
        location: data.location,
        requirements: data.requirements || "",
      });

      setIsSubmitted(true);

      toast({
        title: "Inquiry Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to submit inquiry.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20 text-center text-white">
          <h1 className="text-4xl font-bold">Get a Free Quote</h1>
          <p className="mt-2">Tell us about your project</p>
        </section>

        {/* Form */}
        <section className="container mx-auto py-16 max-w-2xl">
          {isSubmitted ? (
            <div className="text-center">
              <CheckCircle2 className="mx-auto text-green-500 w-16 h-16" />
              <h2 className="text-2xl font-bold mt-4">Thank You!</h2>
              <p>Your inquiry has been submitted.</p>
              <Button onClick={() => setIsSubmitted(false)} className="mt-4">
                Submit Again
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <FormField
                  control={form.control}
                  name="clientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="constructionType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Construction Type</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {constructionTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="plotSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plot Size</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirements</FormLabel>
                      <Textarea {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>

              </form>
            </Form>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Inquiry;