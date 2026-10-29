import { extensions } from 'pixi.js';
import { CanvasSmoothGraphicsPipe } from './canvas/CanvasSmoothGraphicsPipe';
import { GlSmoothGraphicsAdaptor } from './gl/GlSmoothGraphicsAdaptor';
import { GpuSmoothGraphicsAdaptor } from './gpu/GpuSmoothGraphicsAdaptor';
import { SmoothBatcher, SmoothTexturedBatcher } from './shared/batcher/SmoothBatcher';
import { SmoothGraphicsContextSystem } from './shared/SmoothGraphicsContextSystem';
import { SmoothGraphicsPipe } from './shared/SmoothGraphicsPipe';

extensions.add(SmoothGraphicsPipe);
extensions.add(CanvasSmoothGraphicsPipe);
extensions.add(SmoothGraphicsContextSystem);
extensions.add(GlSmoothGraphicsAdaptor);
extensions.add(GpuSmoothGraphicsAdaptor);
extensions.add(SmoothBatcher);
extensions.add(SmoothTexturedBatcher);
