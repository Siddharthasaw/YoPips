import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { LogIn, UserPlus, Lock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom'; // Import Link from React Router

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name || !password || !phone || !agreedToTerms) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields and accept the terms.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Account Created",
        description: "Your YoPips account has been created successfully. Welcome!",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="sign-up" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Earning <span className="text-yopips-yellow">1% Daily</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Create your account now and start benefiting from our automated trading system with MT5 integration
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="border-muted bg-card shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create Your Account</CardTitle>
              <CardDescription className="text-white/70">
                Join thousands of traders earning daily returns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                      className="bg-muted border-muted text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                      className="bg-muted border-muted text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number (for WhatsApp)</label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1234567890" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                      className="bg-muted border-muted text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-white/80">Password</label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                      className="bg-muted border-muted text-white"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreedToTerms} 
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)} 
                      className="data-[state=checked]:bg-yopips-yellow data-[state=checked]:border-yopips-yellow"
                    />
                    <label 
                      htmlFor="terms" 
                      className="text-sm text-white/70 cursor-pointer"
                    >
                      I agree to the Terms of Service and Privacy Policy
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-yopips-yellow hover:bg-yopips-yellow/90 text-black font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <UserPlus className="mr-2 h-5 w-5" />
                        Create Account
                      </div>
                    )}
                  </Button>
                  
                  <div className="relative flex items-center justify-center mt-2">
                    <div className="flex-grow h-px bg-muted"></div>
                    <span className="mx-3 text-sm text-white/60">or</span>
                    <div className="flex-grow h-px bg-muted"></div>
                  </div>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full border-[#25D366] hover:bg-[#25D366]/10 text-white"
                    onClick={() => console.log('WhatsApp signup clicked')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
                    Sign Up with WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="text-center text-sm text-white/60">
              Already have an account? 
              <Link 
                to="/login" // Link to the login page
                className="text-yopips-yellow font-medium ml-1 p-0 flex items-center"
              >
                <LogIn className="mr-1 h-4 w-4" />
                Sign in
              </Link>
            </CardFooter>
          </Card>
          
          <div className="flex justify-center mt-6">
            <div className="bg-muted/50 px-4 py-2 rounded-full flex items-center">
              <Lock className="h-4 w-4 text-yopips-yellow mr-2" />
              <span className="text-xs text-white/60">Secured by 256-bit encryption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
