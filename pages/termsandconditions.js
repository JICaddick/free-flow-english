import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-3xl font-semibold text-center">
          Terms and Conditions
        </h1>

        <div className="prose">
          <section className="mb-6">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="text-slate-600">
              1.1 These terms and conditions ("Terms") govern the provision of
              business English coaching services ("Services") by [Your Business
              Name], hereinafter referred to as "we," "us," or "our," to South
              Korean business executives, hereinafter referred to as "clients"
              or "you."
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">2. Service Description</h2>
            <p className="text-slate-600">
              2.1 Our Services aim to provide tailored, one-on-one
              business-focused English language tuition to enhance your English
              language skills for professional purposes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">3. Payment Terms</h2>
            <p className="text-slate-600">
              3.1 Payment for Services is due in advance and must be made in
              accordance with the payment method specified by us.
            </p>
            <p className="text-slate-600">3.2 All fees are non-refundable unless otherwise specified in writing.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">4. Cancellation and Rescheduling</h2>
            <p className="text-slate-600">
              4.1 Cancellations: If you wish to cancel a scheduled coaching
              session, you must provide us with at least 48 hours' notice.
              Failure to do so may result in a forfeiture of that session.
            </p>
            <p className="text-slate-600">
              4.2 Rescheduling: You may request to reschedule a coaching session
              with at least 24 hours' notice, subject to our availability.
              Rescheduled sessions must take place within 7 days of the original
              scheduled session date.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">5. Client Commitment</h2>
            <p className="text-slate-600">
              5.1 To maximize the benefits of our Services, you agree to
              actively participate, complete assigned coursework, and adhere to
              any recommendations provided by our coaches.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">6. Confidentiality</h2>
            <p className="text-slate-600">
              6.1 We will treat all client information as confidential and will
              not disclose it to third parties without your consent, except as
              required by law.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">7. Termination</h2>
            <p className="text-slate-600">
              7.1 We reserve the right to terminate our coaching relationship
              with you if you engage in any behavior that is disruptive or
              violates these Terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">8. Dispute Resolution</h2>
            <p className="text-slate-600">
              8.1 In the event of a dispute arising from these Terms, we will
              attempt to resolve it through negotiation. If a resolution cannot
              be reached, the dispute may be escalated to mediation or legal
              action as necessary.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
            <p className="text-slate-600">
              9.1 We reserve the right to modify these Terms at any time. Any
              changes will be communicated to you in writing.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">10. Intellectual Property Rights</h2>
            <p className="text-slate-600">
              10.1 All session plans and related content created by us remain
              our intellectual property. Clients are granted a limited,
              non-transferable license to use these materials solely for the
              purpose of the coaching sessions. Any reproduction, distribution,
              or use of these materials beyond the scope of the coaching sessions
              without our express written consent is prohibited.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">11. Recording of Sessions</h2>
            <p className="text-slate-600">
              11.1 We record coaching sessions to ensure quality and provide
              valuable feedback to our coaches. Clients have the right to
              decline session recording by submitting a written request. In such
              cases, no recordings will be made.
            </p>
            <p className="text-slate-600">
              11.2 For clients who consent to session recording, we may request
              to use these recordings for promotional purposes, such as
              testimonials or demonstrations. However, such usage will only occur
              with the client's explicit written consent.
            </p>
          </section>

          <section>
            <p className="text-xl font-semibold">
              By availing of our Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
