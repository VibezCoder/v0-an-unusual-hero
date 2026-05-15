export default function SignUpSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-foreground mb-4">Check Your Email</h1>
        <p className="text-muted-foreground mb-6">
          We&apos;ve sent a confirmation email to your inbox. Please click the link to verify your email address and complete your signup.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
