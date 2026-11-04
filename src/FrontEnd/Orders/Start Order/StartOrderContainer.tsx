"use client";

import React, { useState } from "react";
import OrderStepsNav from "./OrderStepsNav";
import OrderSummarySidebar from "./OrderSummarySidebar";
import Step1Service from "./Step1Service";
import Step2Cards from "./Step2Cards";
import Step3Info from "./Step3Info";
import Step4Shipping from "./Step4Shipping";
import Step5Review from "./Step5Review";
import Step6Sign from "./Step6Sign";
import Step7Pay from "./Step7Pay";
import { OrderState, CardItem, ServiceType, CustomerInfo, ShippingDetails } from "./types";

const initialCard = (): CardItem => ({
  id: Math.random().toString(36).substring(2, 9),
  cardName: "",
  setName: "",
  year: "",
  cardNumber: "",
  gameSport: "Pokémon",
  variation: "",
  currentHolder: "Raw (Ungraded)",
  knownDefects: "",
  declaredValue: 100,
  notes: "",
  serviceTier: "economy",
  addOnCrackOut: false,
  addOnHiResPhotos: false,
  frontPhoto: null,
  backPhoto: null,
  detailPhoto: null,
});

const initialOrderState: OrderState = {
  currentStep: 1,
  serviceType: "restoration",
  termsAcknowledged: false,
  cards: [initialCard()],
  customerInfo: {
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    apartmentSuite: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  },
  shipping: {
    inboundOption: "prepaid_label",
    returnOption: "standard_tracked",
    transitInsurance: false,
  },
  signature: {
    fullName: "",
    acceptedTerms: false,
    date: new Date().toISOString(),
  },
  orderNumber: undefined,
  isCompleted: false,
};

export default function StartOrderContainer() {
  const [orderState, setOrderState] = useState<OrderState>(initialOrderState);
  const [maxAccessibleStep, setMaxAccessibleStep] = useState<number>(1);

  const goToStep = (stepNumber: number) => {
    setOrderState((prev) => ({ ...prev, currentStep: stepNumber }));
    if (stepNumber > maxAccessibleStep) {
      setMaxAccessibleStep(stepNumber);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearOrder = () => {
    if (confirm("Are you sure you want to clear your current order form?")) {
      setOrderState(initialOrderState);
      setMaxAccessibleStep(1);
    }
  };

  const handleSelectService = (service: ServiceType) => {
    setOrderState((prev) => ({
      ...prev,
      serviceType: service,
      cards: prev.cards.map((c) => ({
        ...c,
        serviceTier: service === "restoration" ? "economy" : "standard_pregrade",
      })),
    }));
  };

  const handleUpdateCard = (index: number, updated: Partial<CardItem>) => {
    setOrderState((prev) => {
      const newCards = [...prev.cards];
      newCards[index] = { ...newCards[index], ...updated };
      return { ...prev, cards: newCards };
    });
  };

  const handleAddCard = () => {
    setOrderState((prev) => ({
      ...prev,
      cards: [
        ...prev.cards,
        {
          ...initialCard(),
          serviceTier: prev.serviceType === "restoration" ? "economy" : "standard_pregrade",
        },
      ],
    }));
  };

  const handleRemoveCard = (index: number) => {
    setOrderState((prev) => {
      if (prev.cards.length <= 1) return prev;
      const newCards = prev.cards.filter((_, i) => i !== index);
      return { ...prev, cards: newCards };
    });
  };

  const handleUpdateCustomerInfo = (updated: Partial<CustomerInfo>) => {
    setOrderState((prev) => ({
      ...prev,
      customerInfo: { ...prev.customerInfo, ...updated },
    }));
  };

  const handleUpdateShipping = (updated: Partial<ShippingDetails>) => {
    setOrderState((prev) => ({
      ...prev,
      shipping: { ...prev.shipping, ...updated },
    }));
  };

  const handleUpdateSignature = (sig: { fullName: string; acceptedTerms: boolean }) => {
    setOrderState((prev) => ({
      ...prev,
      signature: {
        ...prev.signature,
        fullName: sig.fullName,
        acceptedTerms: sig.acceptedTerms,
      },
    }));
  };

  const handleCompleteOrder = (orderNum: string) => {
    setOrderState((prev) => ({
      ...prev,
      orderNumber: orderNum,
      isCompleted: true,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalDeclaredValue = orderState.cards.reduce(
    (sum, c) => sum + (Number(c.declaredValue) || 0),
    0
  );

  return (
    <div className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-800 text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-200/80">
          <span>STEP {orderState.currentStep} OF 7</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          START AN ORDER
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
          Choose a service, add each card with photos, pick shipping, review, and sign. We restore and prep your cards with white-glove surgical care.
        </p>
      </div>

      {/* 7-Step Navigation Pill Bar */}
      <OrderStepsNav
        currentStep={orderState.currentStep}
        onStepClick={goToStep}
        maxAccessibleStep={maxAccessibleStep}
      />

      {/* Two Column Layout: Main Form + Sticky Order Summary Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Step Area (Left) */}
        <div className="flex-1 w-full min-w-0">
          {orderState.currentStep === 1 && (
            <Step1Service
              selectedService={orderState.serviceType}
              onSelectService={handleSelectService}
              onContinue={() => goToStep(2)}
            />
          )}

          {orderState.currentStep === 2 && (
            <Step2Cards
              serviceType={orderState.serviceType}
              cards={orderState.cards}
              termsAcknowledged={orderState.termsAcknowledged}
              onToggleTerms={(checked) =>
                setOrderState((prev) => ({ ...prev, termsAcknowledged: checked }))
              }
              onUpdateCard={handleUpdateCard}
              onAddCard={handleAddCard}
              onRemoveCard={handleRemoveCard}
              onBack={() => goToStep(1)}
              onContinue={() => goToStep(3)}
            />
          )}

          {orderState.currentStep === 3 && (
            <Step3Info
              customerInfo={orderState.customerInfo}
              onUpdateInfo={handleUpdateCustomerInfo}
              onBack={() => goToStep(2)}
              onContinue={() => goToStep(4)}
            />
          )}

          {orderState.currentStep === 4 && (
            <Step4Shipping
              shipping={orderState.shipping}
              totalDeclaredValue={totalDeclaredValue}
              onUpdateShipping={handleUpdateShipping}
              onBack={() => goToStep(3)}
              onContinue={() => goToStep(5)}
            />
          )}

          {orderState.currentStep === 5 && (
            <Step5Review
              orderState={orderState}
              onBack={() => goToStep(4)}
              onContinue={() => goToStep(6)}
            />
          )}

          {orderState.currentStep === 6 && (
            <Step6Sign
              orderState={orderState}
              onUpdateSignature={handleUpdateSignature}
              onBack={() => goToStep(5)}
              onContinue={() => goToStep(7)}
            />
          )}

          {orderState.currentStep === 7 && (
            <Step7Pay
              orderState={orderState}
              onBack={() => goToStep(6)}
              onCompleteOrder={handleCompleteOrder}
            />
          )}
        </div>

        {/* Sticky Sidebar (Right) */}
        <OrderSummarySidebar
          orderState={orderState}
          onClearOrder={handleClearOrder}
        />
      </div>
    </div>
  );
}
